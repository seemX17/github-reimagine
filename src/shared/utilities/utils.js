export default class Utils {
    sortType(arr) {
       return arr.sort(function (a, b) {
            if (a.type < b.type) {
                return -1;
            }
            if (a.type > b.type) {
                return 1;
            }
            return 0;
        })
    }

    sortByDate(array){
        return array.sort(function(a,b){
            new Date(b.commit.committer.date) - new Date(b.commit.committer.date);
        });
    }
}