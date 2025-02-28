// 书架功能 类 or function
// 书和书之间紧挨着，没有空隙
/*
 书本使用字符串表示
 getAll获取到所有书的书名
 getNthBook
 insertNBook 一次性插入多本书 
 moveBook 一次性移动多本书，按照需求实现
 deleteBook 一次性删除2-5
 不希望出现溢出等情况，希望能有报错提示，比如
 参数校验 可以放宽
*/


function BookShelf(list) {
    this.list = list;
    this.len = this.list.length;
  }
  
  // getAll获取到所有书的书名
  BookShelf.prototype.getAll = function () {
    return '所有书的书名: ' + this.list.join(', ');
  }
  
  BookShelf.prototype.getNthBook = function (index) {
    const target = this.list[index];
    
    return target ? `第${index}本书是${target}` : `找不到第${index},目前有共${this.len}本书`;
  }
  
  BookShelf.prototype.insertBook = function (index, books) {
    if (books.length < 1) {
      return '请输入想要插入的书本数组 ';
    }
    else {
      index = index < this.len ? index : this.len
      this.list.splice(index, 0, ...books)
    }
    return this.list
  }
  
  // BookShelf.prototype.moveBook = function (index_from = [], index_to = []) {
  //   // todo 校验一下form to的是否match
  //   for (var i = 0; i < index_from.length; i++) {
  //     let tmp = this.list[index_from[i]]
  //     this.list[index_from[i]] = this.list[index_to[i]]
  //     this.list[index_to[i]] = tmp
  //   }
  //   return this.list
  // }
  
  // todo: 0-100 移到最后
  BookShelf.prototype.moveBook = function (books, target_index) {
    if (books.length === 0 || target_index < 0) {
      console.log(`请输入想要移动书序号和要移动到的序号
      （books=[1], target_index=100）第1本书移动到第100之后；
      books=[1,10], target_index=100）第1-10本书移动到第100之后；`);
    }
    else {
      let len = books.length === 1 ? 1 : (books[1] - books[0] + 1)
      // 先删除移动部分
      let booksMove = this.list.splice(books[0], len)
      console.log(booksMove, 'booksMove')
  
      // 再去插入数组
      this.list.splice(target_index - len + 1, 0, ...booksMove)
    }
  
    return this.list
  }
  
  
  BookShelf.prototype.deleteBook = function (index, nums =  1) {
    if (!index) {
      return '请输入想要删除的书本序号，默认只删除当前序号的书（可传入nums设置删除书本数量）';
    }
    else {
      let ret = this.list.splice(index, nums)
      console.log(this.list)
      return ret;
    }
  }
  
  // 存在重复的下标检查 可以待会儿单独抽取出来
  BookShelf.prototype.checkIndex = function () {
    
  }
  
  
  
  var books = new BookShelf(['西游记', '红楼梦', '梦溪笔谈'])
  console.log(books.getAll())
  // console.log(books.getNthBook(100))
  // console.log(books.getNthBook(2))
  console.log(books.insertBook(100, ['水浒传', '简爱']))
  console.log(books.moveBook([0], 4))
  console.log(books.moveBook([0, 1], 4))
  // books.deleteBook(3, 2)
  
  
  
  
  