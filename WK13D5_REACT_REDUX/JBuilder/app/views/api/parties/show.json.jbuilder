json.partial! 'party', party: @party


json.guests do
  json.array! party.guests do |guest|
      json.partial! 'api/guests/guest', guest: guest
  end

  
end