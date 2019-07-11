fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

def nsquared(arr)
  longest_fish = ""
  prc = Proc.new {|a,b| a <=> b}
  swap = true
  while swap
    swap = false
    (1...arr.length).step do |idx|
      if prc.call(arr[idx-1].length,arr[idx].length) > 0
        arr[idx-1], arr[idx] = arr[idx] , arr[idx-1]
        swap = true
      end
    end
  end
  arr.last
end


def merge_sort(arr)
  return arr if arr.length <= 1
  prc ||= Proc.new {|a,b| a.length <=> b.length}
  middle = arr.length/2
  left = merge_sort(arr.take(middle))
  right = merge_sort(arr.drop(middle))
  merge(left,right,&prc)
end

def merge(left,right,&prc)
  new_arr = []
  until left.empty? || right.empty?
    if prc.call(left[0],right[0]) <= 0
      new_arr << left.shift
    else
      new_arr << right.shift
    end
  end
  new_arr.concat(left).concat(right)
end

def linear_check(arr)
  longest_fish = ""
  arr.each do |x|
    longest_fish = x if x.length > longest_fish.length
  end
  longest_fish
end

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
new_tiles_data_structure = {"up" => 0,"right-up"=>1, "right"=>2, "right-down"=>3,
   "down"=>4, "left-down" =>5, "left"=> 6,  "left-up" =>7
  }

def slow_dance(move, tiles_array)
  tiles_array.each_with_index {|mov, index| return index if mov == move}
end

def fast_dance(move, tiles_array)
  tiles_array[move]
end
p nsquared(fish)
p linear_check(fish)
p merge_sort(fish).last

p fast_dance("right-down", new_tiles_data_structure)
p slow_dance("right-down", tiles_array)

