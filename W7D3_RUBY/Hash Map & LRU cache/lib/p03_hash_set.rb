class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    return nil if include?(num)
    @count += 1
    if @count == @store.size
      resize!
    end
    #idx = num % @store.size
    self[num] << num
  end

  def include?(num)
    #idx = num % @store.size
    #@store[idx].include?(num)
    self[num].include?(num)
  end

  def remove(num)
    #idx = num % @store.size
    @count -= 1 if self[num].delete(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    idx = num.hash % num_buckets
    @store[idx]
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_arr = Array.new(@count * 2) { [] }
    @store.flatten.each do |num|
      #bucket.each do |num|
        idx = num.hash % new_arr.size
        new_arr[idx] << num
      #end
    end
    @store = new_arr
  end
end

# class ResizingIntSet
#   attr_reader :count

#   def initialize(num_buckets = 20)
#     @store = Array.new(num_buckets) { Array.new }
#     @count = 0
#   end

#   def insert(num)
#     return nil if include?(num)
#     @count += 1
#     if @count == @store.size
#       resize!
#     end
#     idx = num % @store.size
#     @store[idx] << num
#   end

#   def remove(num)
#     idx = num % @store.size
#     @count -= 1 if @store[idx].delete(num)
#   end

#   def include?(num)
#     idx = num % @store.size
#     @store[idx].include?(num)
#   end

#   private

#   def [](num) # @store[](num) == @store[num]
#     # optional but useful; return the bucket corresponding to `num`
#     # idx = num % num_buckets
#     # @store[idx] << num
#   end

#   def num_buckets
#     @store.length
#   end

#   def resize!
#     new_arr = Array.new(@count * 2) { [] }
#     @store.each do |bucket|
#       bucket.each do |num|
#         idx = num % new_arr.size
#         new_arr[idx] << num
#       end
#     end
#     @store = new_arr
#   end
# end
