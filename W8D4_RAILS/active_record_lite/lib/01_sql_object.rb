require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    @columns ||= DBConnection.execute2(<<-SQL)
      SELECT
        *
      FROM
        #{table_name}
    SQL
    @columns.first.map(&:to_sym) 
  end

  def self.finalize!
    columns.each do |colm|
      define_method(colm) do
        attributes[colm]
      end
      define_method("#{colm}=") do |arg|
        attributes[colm] = arg
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name ||= "#{self.name.tableize}" 
  end

  def self.all
    results = DBConnection.execute(<<-SQL)
      SELECT *
      FROM #{table_name}
    SQL
    parse_all(results)
  end

  def self.parse_all(results)
    results.map do |result|
      self.new(result)
    end
  end

  def self.find(id)
    data = DBConnection.execute(<<-SQL, id)
    SELECT
      *
    FROM
      #{table_name}
    WHERE
      id = ?
    SQL
    data.empty? ? nil : self.new(data.first)
    # @attributes[:id] 
  end

  def initialize(params = {})
    params.each do |k, v|
      k = k.to_sym
      unless self.class.columns.include?(k) 
        raise "unknown attribute '#{k}'"
      end
      send("#{k}=", v)
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    self.class.columns.map do |colm|
      #@attributes[colm]
      send(colm)
    end
  end

  def insert
    val_array = (['?'] * self.class.columns.length).join(',') #  (?, ?, ?)
    colm_array = self.class.columns.join(',')                 # (:id, :name, :owner_id)
    # cat_array = self.attribute_values
    # data = DBConnection.execute(<<-SQL, cat_array)
    data = DBConnection.execute(<<-SQL, attribute_values)
    INSERT INTO
      #{self.class.table_name} (#{colm_array})
    VALUES
      (#{val_array})
    SQL
    @attributes[:id] = DBConnection.last_insert_row_id
  end

  def insert
    val_array = (['?'] * self.class.columns.length).join(',') #  (?, ?, ?)
    colm_array = self.class.columns.join(',')                 # (:id, :name, :owner_id)
    # cat_array = self.attribute_values
    # data = DBConnection.execute(<<-SQL, cat_array)
    data = DBConnection.execute(<<-SQL, attribute_values)
    INSERT INTO
      #{self.class.table_name} (#{colm_array})
    VALUES
      (#{val_array})
    SQL
    @attributes[:id] = DBConnection.last_insert_row_id
  end

  def update
    colm = self.class.columns.map { |col| "#{col} = ?" }.join(',')
    DBConnection.execute(<<-SQL, attribute_values, attributes[:id] )
      UPDATE #{self.class.table_name}
      SET #{colm}
      WHERE id = ?
    SQL
  end

  def save
    id.nil? ? insert : update
  end
end
