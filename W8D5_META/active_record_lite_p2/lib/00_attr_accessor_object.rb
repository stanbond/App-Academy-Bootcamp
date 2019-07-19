class AttrAccessorObject
  def self.my_attr_accessor(*names)
   
    names.each do |method|
      define_method(method) do              
        self.instance_variable_get("@#{method}")
      end
      
      define_method("#{method}=") do |arg|
        self.instance_variable_set("@#{method}", arg)
      end
    end
  end
end