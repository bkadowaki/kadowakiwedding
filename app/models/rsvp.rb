class Rsvp
  include Mongoid::Document
  field :phone, type: String
  field :attending, type: String
  field :name1, type: String
  field :name2, type: String
  field :name3, type: String
  field :name4, type: String
  field :name5, type: String

  has_one :user
end
