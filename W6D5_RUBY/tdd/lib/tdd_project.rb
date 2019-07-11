class Array

  def my_uniq#(array)
    arr=[]
    self.each{|ele|arr<<ele if !arr.include?(ele)}
    arr
  end

  def two_sum
    arr = []
    (0...self.length).each do |i|
        (i+1...self.length).each do |j|
            arr << [i,j] if self[i] + self[j] == 0
        end
    end
    arr
  end

  def my_transpose
    arr=[]
    (0...self.length).each do |row|
        new_row = []
        (0...self.length).each do |col|
            new_row << self[col][row]
        end
        arr << new_row
    end
    arr
  end
end
