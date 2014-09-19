require 'bcrypt'

class User
  include Mongoid::Document
  include Mongoid::Slug
  field :name, type: String
  field :email, type: String
  field :password_digest, type: String
  slug :name

  belongs_to :rsvp

# validates_presence_of :name, :email, :password_digest, :message => "Missing a field!"
# validates_presence_of :email, uniqueness: true, :message => "Email already used!"

  attr_reader :password

  def password=(new_password)
  	self.password_digest = BCrypt::Password.create(new_password)
  end

  def authenticate(test_password)
  	if test_password && BCrypt::Password.new(self.password_digest) == test_password
  			self
  	else
  		false
  	end
  end



end