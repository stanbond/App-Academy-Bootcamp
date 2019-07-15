require 'singleton'
require 'sqlite3'
require 'byebug'

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

  def self.find_by_id(id) #RUBY VERSION
    find = self.all
    find.each do |user|
      return user if user.id == id
    end
    return false
  end

  def self.find_by_name(fname, lname) #RUBY VERSION
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

  def authored_questions
    Question.find_by_author_id(@id)
  end

  def authored_replies
    Reply.find_by_user_id(@id)
  end

#   {'id' => 1, 'fname' => 'Carlos', 'lname' => 'Catly'}
end

class Question #< User
    attr_accessor :id, :title, :body, :author_id

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @author_id = options['author_id']
  end

  #{'id' => 4, 'title' => 'history', 'body' => 'When was AA started?', 'author_id' => 2}
  #{'id' => 2, 'title' => 'teacher', 'body' => 'where is Alvin?', 'author_id' => 2}

  def self.all
    data = QuestionsDatabase.instance.execute("SELECT * FROM questions")
    data.map {|datum| Question.new(datum)}
  end

  def self.find_by_id(id) #RUBY VERSION
    find = self.all
    find.each do |question|
      return question if question.id == id
    end
    return false
  end

  def self.find_by_author_id(author_id)
    questions = QuestionsDatabase.instance.execute('SELECT * FROM questions WHERE author_id = ?', author_id)
    questions.map{ |question| Question.new(question) }
  end

  def author
    User.find_by_id(@author_id)
    # User.find_by_id(@author_id).fname + User.find_by_id(@author_id).lname
  end

  def replies
    Reply.find_by_question_id(@id)
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

    
  #   {'id'=> 2 , 'question_id' => 2, 'user_id' => 2}

  def self.find_by_id(id) #RUBY VERSION
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

  def self.find_by_user_id(user_id)
    questions = QuestionsDatabase.instance.execute('SELECT * FROM replies WHERE user_id = ?', user_id)
    questions.map{ |question| Reply.new(question) }
  end

  def self.find_by_question_id(question_id)
    replies = QuestionsDatabase.instance.execute('SELECT * FROM replies WHERE question_id = ?', question_id)
    replies.map{ |question| Reply.new(question) }
  end

  def self.find_by_id(id) #RUBY VERSION
    find = self.all
    find.each do |question|
      return question if question.id == id
    end
    return false
  end

  def initialize(options)
    @id = options['id']
    @body = options['body']
    @question_id = options['question_id']
    @user_id = options['user_id']
    @parent_id = options['parent_id']
  end
# {'id' => 1, 'body' => 'New York', 'question_id' => 2, 'user_id' => 2, 'parent_id' => 1}
 # {'id' => 1, 'body' => 'Num thats divisible by only 1 and itself', 'question_id' => 1, 'user_id' => 1, 'parent_id' => nil }

  def author
    User.find_by_id(@user_id)
  end

  def question
    Question.find_by_id(@question_id)
  end

  def parent_reply
    Reply.find_by_id(@parent_id)
  end

# {'id' => 4, 'body' => 'Thank you', 'question_id' => 1, 'user_id' => 1, 'parent_id' => 1}
  def child_replies
    # debugger
    children = []
    question.replies.each do |reply|
      children << reply if !reply.parent_reply.is_a?(String) && reply.parent_reply.id == @id 
    end
    children
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

# QuestionFollow::followers_for_question_id(question_id)
# This will return an array of User objects!
# QuestionFollow::followed_questions_for_user_id(user_id)
# Returns an array of Question objects.
# User#followed_questions
# One-liner calling QuestionFollow method.
# Question#followers
# One-liner calling QuestionFollow method.
