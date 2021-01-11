json.key_format! camelize: :lower
json.extract! contact, :id, :first_name, :last_name, :url, :email, :created_at, :updated_at
