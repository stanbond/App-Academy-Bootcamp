def sum_to(n)
  return 1 if n == 1
  return nil if n < 0
  return 0 if n == 0
  n + sum_to(n - 1)  


end

p sum_to(9) #=>45
p sum_to(1) #=> 1
p sum_to(-8) #=> nil

def add_numbers(array)
return nil if array.empty?
return array[0] if array.length == 1
array[0] + add_numbers(array[1..-1])

end
p add_numbers([5])
p add_numbers([1,2,3,4,5]) #=> 15
p add_numbers([]) #=> nil

def gamma_fnc(n)
    return nil if n == 0
    return 1 if n == 1
    (n - 1) * gamma_fnc(n - 1)

end
p gamma_fnc(0) #=> nil
p gamma_fnc(4) #=> 6

def ice_cream_shop(flavors, favorite)
    return false if flavors.empty?
    return true if flavors[0] == favorite
    ice_cream_shop(flavors[1..-1], favorite)

end

p ice_cream_shop(['vanilla', 'strawberry'], 'blue moon')  # => returns false
p ice_cream_shop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')  # => returns true

def reverse(str)
    return "" if str.empty?
    reverse(str[1..-1]) + str[0]

end

p reverse("cat") #=>"tac"
p reverse("seal") #=>"laes"

