#parking lot (space sensitive, )
#different sizes vehicles limits small mid large
#free parking woohoo
#classes -

class ParkingLot
    attr_reader :available_spaces
  def initialize(levels)
    @levels = 3
    #@available_spaces = 30
  end

  def park_vehicle(vehicle)

  end

end

class Level 
    def initialize(floor, num_spots)
        @floor = floor
        @spots 
        @available_spots= num_spots
    end

  def park_vehicle(vehicle)

  end

  def park_starting_at(spot_num, vehicle)

  end

  def find_available_spots(vehicle)

  end

  def spot_freed
    @available_spots+=1
  end
end

class Vehicle
  def initialize(size)
    @size = size
    
  end
end 

class Parkingspot

  def initialize(size)
    @size = size
  end

  def available?
    .empty?
  end
end



class Node

    def dfs(target, &prc)
        raise "need prc or target" if target == nil || prc.nil?
      return self if prc.call(self)
        @children.each do |child|
            child_val = child.dfs(target, &prc)
            return child_val if child_val
        end
      nil
    end
end



  def dfs(, &prc)
    raise "Must give a proc or target" if prc.nil?

    return self if prc.call(self)

    self.children.each do |node|
      result = node.dfs(target, &prc)
      return result if result
    end

    nil
  end
end