require 'byebug'

class MaxIntSet
  attr_reader :store

  def initialize(max)
    @store = Array.new(max, false)
  end

  def insert(num)
    # debugger
    validate!(num)
    @store[num] = true
    false
  end

  def remove(num)
    validate!(num)
    @store[num] = false
  end

  def include?(num)
    validate!(num)
    @store[num] 
  end

  private

  def is_valid?(num)
    num.between?(0, @store.size)
  end

  def validate!(num)
    raise "Out of bounds" unless is_valid?(num)
  end
end


class IntSet
  
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num] << num unless @store.include?(num)
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
   self[num].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    idx = num % num_buckets
    @store[idx]
  end

  def num_buckets
    @store.length
  end
end


class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    return nil if include?(num)
    @count += 1
    if @count == @store.size
      resize!
    end
    idx = num % @store.size
    @store[idx] << num
  end

  def remove(num)
    idx = num % @store.size
    @count -= 1 if @store[idx].delete(num)
  end

  def include?(num)
    idx = num % @store.size
    @store[idx].include?(num)
  end

  private

  def [](num) # @store[](num) == @store[num]
    # optional but useful; return the bucket corresponding to `num`
    # idx = num % num_buckets
    # @store[idx] << num
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_arr = Array.new(@count * 2) { [] }
    @store.each do |bucket|
      bucket.each do |num|
        idx = num % new_arr.size
        new_arr[idx] << num
      end
    end
    @store = new_arr
  end

end
