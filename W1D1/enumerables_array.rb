def factors(num)
    (1..num).select {|ele| num % ele == 0} 
end

def subwords(string, array)
    #arr=[]
    #array.each do |word|
    #    if string.include?(word)
    #        arr << word
    #    end
    #end
    #arr
    array.select{|word| word if string.include?(word)}
end

def doubler(array)
    array.map {|num| num * 2}
end

class Array
    def bubble_sort!(&prc)
    sorted = false 
    prc ||= Proc.new {|num1, num2| num1 <=> num2 }

    while !sorted
      sorted = true 
      (0...self.length-1).each do |i|
        if prc.call(self[i], self[i+1]) > 0
          self[i], self[i+1] = self[i+1], self[i]
          sorted = false
        end
        end
    end
    self
  end

  def bubble_sort
      arr = self.dup
      arr.bubble_sort!
    end

    def my_each(&prc)
        i = 0
        while i < self.length #-1
            prc.call(self[i])
            i += 1
        end
        self
    end
    
    def my_map(&prc)
        new_array=[]
        i=0
        while i < self.length
            new_array << prc.call(self[i])
            i += 1
        end
        new_array
    end


    def my_select(&prc)
        new_array=[]
        i=0
        while i < self.length
            new_array << self[i] if prc.call(self[i])
            i += 1
        end
        new_array
    end

    def my_inject(&prc)
      acc = self[0]
      i=0
        while i < self.length-1
          acc = prc.call(acc, self[i + 1])
            i += 1
        end
    end
end

def concatenate(array)
    array.inject(:+) #{ |acc1, ele2| acc1 += ele2}
end

#def root(num)
#  num < 10 ? num : root((num/10) + root(num%10))
#end