class CreatePrivateLetters < ActiveRecord::Migration[6.1]
  def change
    create_table :private_letters do |t|
      t.string :text
      t.datetime :date
<<<<<<< HEAD
      t.integer :user_id
=======
>>>>>>> 51397f7f421d2a5712db92c40055cd42e2dfbed8
      t.belongs_to :user, null: false, foreign_key: true


      t.timestamps
    end
  end
end
