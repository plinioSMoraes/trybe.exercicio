const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
//   "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. 
//   Rua das Flores, Nº: 389, AP: 701".
  const customerInfo = (order) => {
    let deliveryPerson = order.order.delivery.deliveryPerson;
    let personDestination = order.name;
    let street = order.address.street;
    let number = order.address.number;
    let apartment = order.address.apartment;
    let telefone = order.phoneNumber;
    let orderPrint = `Olá ${deliveryPerson}, entrega para: ${personDestination}, Telefone: ${telefone}, R. ${street}, Nº: ${number}, AP: ${apartment}`;
    console.log(orderPrint);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    order.name = `Luiz Silva`;
    order.payment.total = 50;
    let orderPrint = `Olá ${order.name}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${order.payment.total},00`;
    console.log(orderPrint);
  }
//   Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  orderModifier(order);