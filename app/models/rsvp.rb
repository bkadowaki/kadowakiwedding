class Rsvp
  include Mongoid::Document
  field :name, type: String
  field :email, type: String
  field :phone, type: String
  field :attending, type: Boolean
  field :how_many, type: Integer
end
