<<<<<<< HEAD
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_12_08_101833) do
=======

ActiveRecord::Schema.define(version: 2022_12_08_074132) do
>>>>>>> 51397f7f421d2a5712db92c40055cd42e2dfbed8

  create_table "private_letters", force: :cascade do |t|
    t.string "text"
    t.datetime "date"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_private_letters_on_user_id"
  end

  create_table "public_letters", force: :cascade do |t|
    t.string "text"
    t.datetime "date"
    t.integer "views"
    t.integer "likes"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_public_letters_on_user_id"
  end

<<<<<<< HEAD
  create_table "tests", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

=======
>>>>>>> 51397f7f421d2a5712db92c40055cd42e2dfbed8
  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.integer "phone_number"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "private_letters", "users"
  add_foreign_key "public_letters", "users"
end
