# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :text             not null
#  password_digest :text             not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
