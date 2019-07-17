# Table name: actors
#
#  id   :bigint           not null, primary key
#  name :string           not null
#

# Table name: movies
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  yr          :integer          not null
#  score       :float            not null
#  votes       :integer          not null
#  director_id :integer          not null

# Table name: castings
#
#  id       :bigint           not null, primary key
#  actor_id :integer          not null
#  movie_id :integer          not null
#  ord      :integer          not null

def eighties_b_movies
  # List all the movies from 1980-1989 with scores falling between
  # 3 and 5 (inclusive).
  # Show the id, title, year, and score.
  Movie 
    .select(:id, :title, :yr, :score)
    .where(yr: 1980..1989)
    .where(score: 3..5)

  # Movie 
  #   .select(:id, :title, :yr, :score)
  #   .where(['yr IN (?) and score IN (?)', (1980..1989), (3..5)])
end

def bad_years
  # List the years in which a movie with a rating above 8 was not released.
  Movie
    .group(:yr)
    .having('MAX(score) < 8')
    .pluck(:yr)
end

def cast_list(title)
  # List all the actors for a particular movie, given the title.
  # Sort the results by starring order (ord). Show the actor id and name.
  Actor.joins(:movies).where(movies: { title: title }).order('castings.ord')
end

def vanity_projects
  # List the title of all movies in which the director also appeared
  # as the starring actor.
  # Show the movie id and title and director's name.

  # Note: Directors appear in the 'actors' table.
  Movie
    .select(:id, :title, :name)
    .joins(:actors)
    .where('actors.id = movies.director_id')
    .where('castings.ord = 1')

  # Movie.select('movies.id, actors.id as actor_id, movies.director_id as director_id, movies.title, actors.name').joins(:actors).where('actors.id = movies.director_id').where('castings.ord = 1')
end

def most_supportive
  # Find the two actors with the largest number of non-starring roles.
  # Show each actor's id, name and number of supporting roles.
  Actor.select('id, name, COUNT(*))'.joins(:castings).where.not('ord = 1').group('actors.id')
end


