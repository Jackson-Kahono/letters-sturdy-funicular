class PrivateLetterSerializer < ActiveModel::Serializer
  attributes :id, :text, :date, :user_id, :user
end
