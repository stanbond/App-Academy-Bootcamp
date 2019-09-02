# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
coords_array = [
    [37.745323, -122.447411],
    [37.743128, -122.467241],
    [37.796581, -122.438819],
    [37.722575, -122.425284],
    [37.715245, -122.414411],
    [37.798647, -122.402500],
    [37.715245, -122.414411],
    [37.778551, -122.464702],
    [37.759939, -122.401698],
    [37.778551, -122.464702]
]



coords_array.each do |coord|
    Bench.create!({description:"This is x: #{coord[0]} y: #{coord[1]}", lat: coord[0], lng: coord[1]})
end