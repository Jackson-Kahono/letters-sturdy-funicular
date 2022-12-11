class PublicLetterSerializer < ActiveModel::Serializer
  attributes :id, :text, :date, :views, :likes, :user_id, :user
end
