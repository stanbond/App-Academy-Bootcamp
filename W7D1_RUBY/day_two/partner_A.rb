class Jukebox
    attr_accessor :user
    attr_reader :current_track

    def initialize(player, user, current_track)
        @player = player
        @user = user
        @current_track = nil
    end
    
end

class Player
    attr_reader :album
    attr_accessor :playlist

    def initialize(album, playlist)
        @album = album
        @playlist = playlist
    end
    
    def play
        @playlist.first
    end
    
end

class Playlist
    
    def initialize(current_pl)
        @playlist = []
    end
    
    def add_track(track)
        @playlist.push(add_music)
    end
    
    def remove_track(track)
        @playlist.delete(track)
    end
end

class AlbumData

end

class Track
end

class User
end


# BFS
# Node will take a value for initialization
# Monkey Patch
# BFS from root node, takes in a proc and target as args
# Example usage:

```ruby
n1 = Node.new(1) making a node with a value of 1

n1.bfs(1) #=> n1

```

class Node

    # def initialize(value)
    #     @value = value
    #     @children = children
    # end

    # def value
    # end
    # def parent
    # end
    # def parent=(value)
    # end
    # def children
    # end

    def bfs(&prc)
        raise "Must give a proc or target" if prc.nil?

        queue = [self]

        until queue.empty?
            visited = queue.shift

            return visited if prc.call(visited)

            queue += visited.children
        end

        return nil
    end

end