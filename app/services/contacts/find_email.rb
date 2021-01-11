# frozen_string_literal: true

module Contacts
  class FindEmail < Mutations::Command
    required do
      string :first_name
      string :last_name
      string :url
    end

    def execute
      emails.each do |email|
        result = api_client.check_email(email)
        return create_contact(email) if email_valid?(result)
      end
    end

    def create_contact(email)
      Contact.create!(first_name: first_name, last_name: last_name, url: url,
                      email: email)
    end

    def email_valid?(result)
      result['format_valid'] && result['mx_found'] && result['smtp_check'] && !result['catch_all']
    end

    def api_client
      @api_client ||= Contacts::ApiClient.new
    end

    def emails
      [
        "#{first_name}.#{last_name}@#{url}",
        "#{first_name}@#{url}",
        "#{first_name}#{last_name}@#{url}",
        "#{last_name}.#{first_name}@#{url}",
        "#{first_name.first}.#{last_name}@#{url}",
        "#{first_name.first}#{last_name.first}@#{url}"
      ].map(&:downcase)
    end
  end
end
