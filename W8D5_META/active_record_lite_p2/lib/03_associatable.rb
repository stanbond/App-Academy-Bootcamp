require_relative '02_searchable'
require 'active_support/inflector'

# Phase IIIa
class AssocOptions
  attr_accessor(
    :foreign_key,
    :class_name,
    :primary_key
  )

  def model_class
    class_name.constantize
  end

  def table_name
    class_name.downcase + "s"
  end
end

# options = BelongsToOptions.new(:owner)
# options.foreign_key # => :owner_id
# options.primary_key # => :id
# options.class_name # => "Owner"

class BelongsToOptions < AssocOptions
  def initialize(name, options = {})
    name = name.to_s
    default = {
      primary_key: :"id",
      foreign_key: :"#{name}_id",
      class_name: "#{name.capitalize}"
    }

    options = default.merge(options)
    
    self.primary_key = options[:primary_key]
    self.foreign_key = options[:foreign_key]
    self.class_name  = options[:class_name]
  end
end

class HasManyOptions < AssocOptions
  def initialize(name, self_class_name, options = {})
    name = name.to_s
    default = {
      primary_key: :"id",
      foreign_key: :"#{self_class_name.downcase}_id",
      class_name: "#{name.singularize.capitalize}"
    }

    options = default.merge(options)
    
    self.primary_key = options[:primary_key]
    self.foreign_key = options[:foreign_key]
    self.class_name  = options[:class_name]
  end
end

module Associatable
  # Phase IIIb
  def belongs_to(name, options = {})
    assoc_options[name] = BelongsToOptions.new(name, options)
    define_method(name) do
      option = self.class.assoc_options[name]
      foreign_key = self.class.find(id).id
      model = option.model_class
      model.where(option.primary_key => foreign_key).first
    end
  end

  def has_many(name, options = {})
    define_method(name) do
      option = HasManyOptions.new(name, self.class.name, options)
      primary_key = self.id
      model = option.model_class
      model.where(option.foreign_key => primary_key)
    end
  end

  def assoc_options
    @assoc_options ||= {}
  end
end

class SQLObject
  extend Associatable
end
