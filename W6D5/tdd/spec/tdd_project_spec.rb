require 'rspec'
require 'tdd_project'

describe Array do

    describe "#my_uniq" do
        it "removes the duplicates of the array" do
            expect([1, 2, 1, 3, 3].my_uniq).to eq([1, 2, 3])
        end
    end
    
    describe "#two_sum" do
        it "finds index of sums of 0" do
            expect([-1, 0, 2, -2, 1].two_sum).to eq([[0, 4], [2, 3]])
        end
    end

    describe "#my_transpose" do
        it "create your own transpose" do
            expect([
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ].my_transpose).to eq([[0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]])
        end
    end

end