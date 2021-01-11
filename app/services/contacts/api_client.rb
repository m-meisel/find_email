# frozen_string_literal: true

module Contacts
  class ApiClient
    class ClientError < StandardError; end

    def check_email(email)
      request_params = {
        access_key: Rails.application.credentials.config[:apilayer],
        email: email,
        smtp: 1,
        format: 1,
        # catch_all: 1  Turned of for now because the free subscription does not support it
      }

      response = client.get('check', request_params)
      raise(ClientError, "Request Error: #{response.body}") unless response.success?

      response.body
    end

    def client
      @client ||= Faraday.new(url: 'http://apilayer.net/api/') do |conn|
        conn.request :url_encoded
        conn.request :retry
        conn.response :json
        conn.adapter :patron
      end
    end
  end
end
