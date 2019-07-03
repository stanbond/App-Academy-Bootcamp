# PHASE 2
def convert_to_int(str)
  begin
    Integer(str)
  rescue ArgumentError
    puts "This is not a number literal"
  end

end

# PHASE 3
FRUITS = ["apple", "banana", "orange"]

def reaction(maybe_fruit)
  if FRUITS.include? maybe_fruit
    puts "OMG, thanks so much for the #{maybe_fruit}!"
  else 
    raise StandardError 
  end 
end

def feed_me_a_fruit
  begin
    puts "Hello, I am a friendly monster. :)"

    puts "Feed me a fruit! (Enter the name of a fruit:)"
      #begin
    maybe_fruit = gets.chomp
    reaction(maybe_fruit) 
  rescue StandardError #&& if maybe_fruit == "coffee"
    puts "Give me a coffee to try again"
    maybe_coffee = gets.chomp
    if maybe_coffee == "coffee" 
       retry 
    else
      puts "GO AWAY"
    end
  ensure
    puts "Careful what you feed monsters"
  end
end  

# PHASE 4
class BestFriend


    def initialize(name, yrs_known, fav_pastime)
      begin
        @name = name
        @yrs_known = yrs_known
        @fav_pastime = fav_pastime
        #begin
      raise ShortFriendError if yrs_known < 5
      raise FriendNameError if name.length < 2
      raise ActivityError if fav_pastime.length < 2

     #end
      rescue ShortFriendError
        puts "What?! It's been more than that, how many years has it really been?"
        yrs_known = gets.to_i
        retry
      rescue FriendNameError
        puts "That's not my name! My name is longer than that!"
        name = gets.chomp
        retry
      rescue ActivityError
        puts "We've never done that!"
        fav_pastime = gets.chomp
        retry
      end
    end
  
  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known} year. Let's be friends for another #{1000 * @yrs_known}."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end


class ShortFriendError < ArgumentError
end

class FriendNameError < ArgumentError
end

class ActivityError < ArgumentError
end