class CreatePrivateLetters < ActiveRecord::Migration[6.1]
  def change
    create_table :private_letters do |t|
      t.string :text
      t.datetime :date
      t.integer :user_id
      t.belongs_to :user, null: false, foreign_key: true


      t.timestamps
    end
  end
end
