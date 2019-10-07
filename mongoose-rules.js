/**
     * eq => equal to
     * ne => not equal
     * gt => gretter than
     * gte => gretter than or equal to
     * lt => less than
     * lte => less than or equal to 
     * in => finds values are in the arays ex. 
     *       find({author: 'Shuvo', isPublished: true, price {$in : [1 , 2 , 3]}})
     * nin => not in
     * 
     * or 
     * and
     * 
     * if i want to find coures that are published = true and/or author = shuvo then use syntax is
     * after find() method
     * or/and([{author:'shuvo'} , {isPublished : true}])
     * 
     * Regular expression
     * 
     * prefix re => find({author : /^shuvo/i})
     * suffix re => find({author : /shuvo$/i})
     * any occurence  re => find({author : /.starShuvo.star/i}) => star = *
     */
