# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# 10.times do
#   u = User.create!(username: Faker::Name.name, password: "password", session_token: Faker::Hipster.word )
# end
10.times do
  Post.create!(
    title: Faker::Hipster.word,
    url: "google.com",
    user_id:1 
  )
end



# ActiveRecord::Schema.define(version: 2019_08_01_163751) do

#   # These are extensions that must be enabled in order to support this database
#   enable_extension "plpgsql"

#   create_table "comments", force: :cascade do |t|
#     t.text "body", null: false
#     t.integer "post_id", null: false
#     t.integer "user_id", null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.index ["post_id"], name: "index_comments_on_post_id", unique: true
#     t.index ["user_id"], name: "index_comments_on_user_id", unique: true
#   end

#   create_table "posts", force: :cascade do |t|
#     t.string "title", null: false
#     t.string "url", null: false
#     t.integer "user_id", null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.index ["user_id"], name: "index_posts_on_user_id", unique: true
#   end

#   create_table "users", force: :cascade do |t|
#     t.text "username", null: false
#     t.text "password_digest", null: false
#     t.string "session_token", null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.index ["session_token"], name: "index_users_on_session_token", unique: true
#     t.index ["username"], name: "index_users_on_username", unique: true
#   end

# end
