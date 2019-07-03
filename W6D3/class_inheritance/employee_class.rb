class Employee

    attr_accessor :boss, :salary

    def initialize(name, title, salary, boss = nil)
        @name = name
        @title = title
        @salary = salary
        @boss = boss

        add_boss unless boss.nil?
    end

    def add_boss
        @boss.peons << self
    end

    def bonus(multiplier)
        bonus = @salary * multiplier
    end

end