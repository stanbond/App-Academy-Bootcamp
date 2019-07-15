require 'singleton'
require 'sqlite3'

class QuestionsDatabase < SQLite3::Database
include Singleton

  def initialize
    super('questions.db')
    self.results_as_hash = true
    self.type_translation = true
  end
end

class User
  attr_accessor :id, :lname, :fname

  def self.all
    data = QuestionsDatabase.instance.execute("SELECT * FROM users")
    data.map {|datum| User.new(datum)}
  end

  def sql_find_by_id(id) #SQL VERSION
    results = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        user
      WHERE
        id = ?
    SQL

    return "Not found" if results.empty?
    self.new(results.first)
  end

  def find_by_id(id) #RUBY VERSION
    find = self.all
    find.each do |user|
      return user if user.id == id
    end
    return false
  end

  def find_by_name(fname, lname) #RUBY VERSION
    find = self.all
    find.each do |user|
      return user if user.fname == fname && user.lname == lname
    end
    return false
  end

  def self.sql_find_by_name(fname, lname) #SQL VERSION
    results = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        user
      WHERE
        fname = ? AND lname = ?
    SQL

    return "NON_EXISTANT" if results.empty?
    self.new(results.first)
  end

  def initialize(options)
    @id = options['id']
    @fname = options['fname']
    @lname = options['lname']
  end

end

class Question #< User
    attr_accessor :id, :title, :body, :author_id

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @author_id = options['author_id']
  end

  def self.all
    data = QuestionsDatabase.instance.execute("SELECT * FROM questions")
    data.map {|datum| Question.new(datum)}
  end

  def find_by_id(id) #RUBY VERSION
    find = self.all
    find.each do |question|
      return question if question.id == id
    end
    return false
  end

end

class Question_follow
    attr_accessor :id, :question_id, :user_id

  def self.all
    data = QuestionsDatabase.instance.execute("SELECT * FROM question_follows")
    data.map {|datum| Question_follow.new(datum)}
  end

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @user_id = options['user_id']
  end

  def find_by_id(id) #RUBY VERSION
    find = self.all
    find.each do |question|
      return question if question.id == id
    end
    return false
  end

end

  
class Reply
  attr_accessor :id, :question_id, :user_id, :body, :parent_id

  def self.all
    data = QuestionsDatabase.instance.execute("SELECT * FROM replies")
    data.map {|datum| Reply.new(datum)}
  end

  def initialize(options)
    @id = options['id']
    @body = options['body']
    @question_id = options['question_id']
    @user_id = options['user_id']
    @parent_id = options['parent_id']
  end

  def find_by_id(id) #RUBY VERSION
    find = self.all
    find.each do |question|
      return question if question.id == id
    end
    return false
  end
end

class Question_like
    attr_accessor :id, :question_id, :user_id

  def self.all
    data = QuestionsDatabase.instance.execute("SELECT * FROM question_likes")
    data.map {|datum| Question_like.new(datum)}
  end

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @user_id = options['user_id']
  end

  def find_by_id(id) #RUBY VERSION
    find = self.all
    find.each do |question|
      return question if question.id == id
    end
    return false
  end
end



# Question::find_by_author_id(author_id)
# Reply::find_by_user_id(user_id)
# Reply::find_by_question_id(question_id)
# All replies to the question at any depth.
# User::find_by_name(fname, lname)
# User#authored_questions (use Question::find_by_author_id)
# User#authored_replies (use Reply::find_by_user_id)
# Question#author
# Question#replies (use Reply::find_by_question_id)
# Reply#author
# Reply#question
# Reply#parent_reply
# Reply#child_replies