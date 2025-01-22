// 被观察者（Subject）
class Observer {
    constructor() {
      this.observers = new Set(); // 使用 Set 存储订阅者对象
    }
  
    // 添加订阅者
    addUser(user) {
      this.observers.add(user);
      console.log(`${user.name || '用户'} 已订阅`);
    }
  
    // 删除订阅者
    deleteUser(user) {
      if (this.observers.has(user)) {
        this.observers.delete(user);
        console.log(`${user.name || '用户'} 已取消订阅`);
      } else {
        console.log('未找到该订阅者');
      }
    }
  
    // 通知所有订阅者
    notifyData(data) {
      console.log(`通知所有订阅者: ${data}`);
      this.observers.forEach((observer) => {
        try {
          observer.update(data);
        } catch (error) {
          console.error('通知订阅者时出错:', error);
        }
      });
    }
  }
  
  // 观察者（Subscriber）
  class User {
    constructor(name) {
      this.name = name; // 添加订阅者的标识
    }
  
    update(data) {
      console.log(`${this.name} 收到消息: ${data}`);
    }
  }
  
  // 示例
  const observer = new Observer();
  const user1 = new User('Alice');
  const user2 = new User('Bob');
  
  observer.addUser(user1); // Alice 已订阅
  observer.addUser(user2); // Bob 已订阅
  
  observer.notifyData('明天下雪'); 
  // 通知所有订阅者: 明天下雪
  // Alice 收到消息: 明天下雪
  // Bob 收到消息: 明天下雪
  
  observer.deleteUser(user1); // Alice 已取消订阅
  
  observer.notifyData('天气转晴'); 
  // 通知所有订阅者: 天气转晴
  // Bob 收到消息: 天气转晴
  