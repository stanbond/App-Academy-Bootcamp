# == Schema Information
#
# Table name: users
#
#  id    :bigint           not null, primary key
#  email :string           not null
#




class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    
end
