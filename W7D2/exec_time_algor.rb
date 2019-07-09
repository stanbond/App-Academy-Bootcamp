#!/usr/bin/env ruby
require 'io/console'
require 'benchmark'

class SortingDemo
 
 
  def self.my_min(array)
    num= 0
    (0...array.length-1).each do |i|
        num = array[i] if array[i] < num && array[i] < array[i+1]
    end
    num
  end
    # first = array.first
    # array.each do |el|
    #     first = el if el < first
    # end
    # first
    # end
 
  def self.largest_contiguous_subsum(array) # => 8
    sum = 0
    max = 0
    array.each do |el|
      sum += el
      sum = 0 if sum < 0
      max = sum if sum > max
    end
    max
  end
    # sums = 0
    # (0...array.length-1).each do |i|
    #     num = array[i] + array[i+1] if array[i] + array[i+1] > num 
    # end
    # sums
    #end
    
  def self.performance_test(size, count)
    arrays_to_test = Array.new(count) { random_arr(size) }

    Benchmark.benchmark(Benchmark::CAPTION, 9, Benchmark::FORMAT,
                        "Avg. Min:  ", "Avg. LCS: ") do |b|
      min = b.report("Tot. Min:  ") { run_my_min(arrays_to_test) }
      lcs = b.report("Tot. LCS: ") { run_largest_contiguous_subsum(arrays_to_test) }
      [min/count, lcs/count]
    end
  end

  def self.random_arr(n)
    Array.new(n) { rand(n) }
  end

  def self.run_my_min(arrays)
    arrays.each do |array|
      array_to_test = array.dup
      my_min(array_to_test)
    end
  end

  def self.run_largest_contiguous_subsum(arrays)
    arrays.each do |array|
      array_to_test = array.dup
      largest_contiguous_subsum(array_to_test)
    end
  end

  def self.run_performance_tests(multiplier = 5, rounds = 3)
    [1, 10, 100, 1000, 10000].each do |size|
      size *= multiplier
      wait_for_keypress(
        "Press any key to benchmark sorts for #{size} elements"
      )
      performance_test(size, rounds)
    end
  end

  def self.wait_for_keypress(prompt)
    puts prompt
    STDIN.getch
  end
end

SortingDemo.run_performance_tests()