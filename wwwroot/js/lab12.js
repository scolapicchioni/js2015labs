function proxied() {
    const t = {
        name: "John",
        surname: "Doe",
        address: "One Way Street 1",
        age: 40
    }

    const h = {
        set(target, key, value) {
            switch (key) {
                case "name":
                case "surname":
                    if (typeof value !== 'string')
                        return false;
                    if (value.length > 50)
                        value = value.substring(0, 50);
                    break;
                case "age":
                    if (typeof value !== 'number' || Number.isNaN(value) || value < 0 || value > 200)
                        return false;
                    break;
            }
            return Reflect.set(...arguments);
        }
    }

    return new Proxy(t, h);
}

const p = proxied();
console.log(`${print(p)}`);

p.name = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra, risus id interdum pharetra, urna turpis elementum neque, eget venenatis lectus lacus a orci. Cras scelerisque magna eu quam tincidunt egestas. Fusce lobortis tortor aliquam, dignissim purus venenatis, suscipit dolor. Praesent blandit purus ut lacus porttitor, sit amet euismod mauris laoreet. Sed sem odio, ultricies nec nisi ut, dignissim fermentum urna. Nam sed eros varius diam porta laoreet. Fusce volutpat efficitur dolor, quis pellentesque mauris semper non. Vivamus mattis sed velit ut gravida.";
p.surname = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra, risus id interdum pharetra, urna turpis elementum neque, eget venenatis lectus lacus a orci. Cras scelerisque magna eu quam tincidunt egestas. Fusce lobortis tortor aliquam, dignissim purus venenatis, suscipit dolor. Praesent blandit purus ut lacus porttitor, sit amet euismod mauris laoreet. Sed sem odio, ultricies nec nisi ut, dignissim fermentum urna. Nam sed eros varius diam porta laoreet. Fusce volutpat efficitur dolor, quis pellentesque mauris semper non. Vivamus mattis sed velit ut gravida.";
p.address = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra, risus id interdum pharetra, urna turpis elementum neque, eget venenatis lectus lacus a orci. Cras scelerisque magna eu quam tincidunt egestas. Fusce lobortis tortor aliquam, dignissim purus venenatis, suscipit dolor. Praesent blandit purus ut lacus porttitor, sit amet euismod mauris laoreet. Sed sem odio, ultricies nec nisi ut, dignissim fermentum urna. Nam sed eros varius diam porta laoreet. Fusce volutpat efficitur dolor, quis pellentesque mauris semper non. Vivamus mattis sed velit ut gravida.";
p.age = 500;
console.log(`${print(p)}`);
p.age = 41;
console.log(`${print(p)}`);
p.age = "oh hi!";
console.log(`${print(p)}`);
p.name = 42;
console.log(`${print(p)}`);

function print(proxy) {
    return `Name: ${proxy.name}
Surname: ${proxy.surname}
Address: ${proxy.address}
Age: ${proxy.age}`;
}