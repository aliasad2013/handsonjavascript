// Code goes here

var PriorityQueue = (() => {

    const pqKey = {};
    const items = new WeakMap();
    class Queue {
        constructor() {
            items.set(qKey, []);
        }

        enqueue(newElement) {
            let queue = items.get(pqKey);
            let newElementPosition = queue.length;

            if (!queue.length) {
                queue.push(newElement);
                return;
            }
            for (let [i, v] of queue.entries()) {
                if (newElement.priority > v.priority) {
                    newElementPosition = i;
                    break;
                }
            }
            queue.splice(newElementPosition, 0, newElement);
        }

        dequeue() {
            let queue = items.get(qKey);
            return queue.shift();
        }

        peek() {
            let queue = items.get(qKey);
            return queue[queue.length - 1];
        }

        clear() {
            items.set(qKey, []);
        }
        size() {
            return items.get(qKey).length;
        }
    }

    return PriorityQueue;

})();

module.exports = PriorityQueue;