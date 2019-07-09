def first_anagram(string, target)
  chars = string.split("")
  combos = permutations(chars)
  combos.map! { |combo| combo.join }
  combos.uniq!
  combos.include?(target)
end

def permutations(arr)
  return [arr] if arr.length == 1
  perm = []
  first_value = arr.first
  rem = permutations(arr.drop(1))
  (0..arr.length - 1).each do |idx|
    rem.each do |sub_arr|
      perm << sub_arr[0...idx] + [first_value] + sub_arr[idx..-1]
    end
  end
  perm
end

def second_anagram(string, target)
  string_chars = string.split("")
  target_chars = target.split("")
  string.split("").each do |char|
    target.split("").each do |char2|
      if char == char2
        string_chars.delete_at(string_chars.index(char))
        target_chars.delete_at(target_chars.index(char2))
      end
    end
  end
  string_chars.length == 0 && target_chars.length == 0
end

def third_anagram(string, target)
  string.split("").sort == target.split("").sort
end

def fourth_anagram(string, target)
  count = Hash.new(0)
  string.split("").each do |char|
    count[char] += 1
  end
  target.split("").each do |char|
    count[char] -= 1
  end
  count.values.all? { |v| v == 0 }
end

p first_anagram("gizmo", "sally")
p first_anagram("elvis", "lives")
p second_anagram("gizmo", "sally")
p second_anagram("elvis", "lives")
p third_anagram("gizmo", "sally")
p third_anagram("elvis", "lives")
p fourth_anagram("gizmo", "sally")
p fourth_anagram("elvis", "lives")