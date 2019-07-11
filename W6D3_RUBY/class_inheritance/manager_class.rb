require_relative "employee_class"

class Manager < Employee

    attr_accessor :peons

    def initialize(name, title, salary, boss = nil)
        super(name, title, salary, boss)
        @peons = []
    end

    def bonus(multiplier)
        peon_salary = 0
        @peons.each { |peon| peon_salary += peon.salary }
        (peon_salary + @salary) * multiplier
    end

end