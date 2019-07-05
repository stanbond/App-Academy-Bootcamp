require 'rspec'
require 'tdd_project'

describe Array do

    describe "#my_uniq" do
        it "removes the duplicates of the array" do
            expect([1, 2, 1, 3, 3].my_uniq).to eq([1, 2, 3])
        end

        it "works without duplicates" do
            expect([1, 2, 3].my_uniq).to eq([1, 2, 3])
        end

        it "works with duplicates" do
            expect([1, 2, 1, 3, 3].my_uniq).to eq([1, 2, 3])
        end

        it "does not modify original array" do
        array = [1, 2, 1, 3, 3]
        array.my_uniq
            expect(array).to eq([1, 2, 1, 3, 3])
        end
    end
    
    describe "#two_sum" do
        it "finds index of sums of 0" do
            expect([-1, 0, 2, -2, 1].two_sum).to eq([[0, 4], [2, 3]])
        end

        it "returns empty array if array is empty" do
            expect([].two_sum).to eq([])
        end

        it "empty if no matches" do
            expect([1,2,3].two_sum).to eq([])
        end

        it "doesn't duplicate matches" do
            expect([1,-1].two_sum).to eq([[0,1]])
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