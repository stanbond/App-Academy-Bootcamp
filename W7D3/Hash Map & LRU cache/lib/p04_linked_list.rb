require 'byebug'

class Node
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
  end
end

class LinkedList 
  include Enumerable

  def initialize
    @head = Node.new
    @tail = Node.new
    @head.next = @tail
    @tail.prev = @head
    @list = []
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @list.first 
  end

  def last
    @list.last 
  end

  def empty?
    @head.next == @tail && @tail.prev == @head
  end

  def get(key)
    link = @tail.prev

    until link == @head
      return link.val if link.key == key
      link = link.prev
    end
    nil
  end

  def include?(key)
    link = @tail.prev

    until link == @head
      return true if link.key == key
      link = link.prev
    end
    false
  end

  def append(key, val)
    new_node = Node.new(key, val)
    @list.push(new_node)
    # @tail = new_node
    new_node.prev = @tail.prev
    new_node.next = @tail
    @tail.prev = new_node
    new_node.prev.next = new_node
  end

  def update(key, val)
    @list.each do |node|
      node.val = val if node.key == key
    end

  end

  def remove(key)
    link = @tail.prev

    until link == @head
      if link.key == key
        next_link = link.next
        next_link.prev = link.prev
        link.prev.next = next_link
      end
      link = link.prev
    end
    nil
  end

  def each

    link = @head.next

    until link == @tail
      yield(link)
      link = link.next
    end
    self
  end

  #uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end
