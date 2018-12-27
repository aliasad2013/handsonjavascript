var express = require('express');
var router = express.Router();
var Utils = require('../utils/messsaging-utils');
const msgUtils = new Utils();



router.route('/').
    post(function (req, res) {
        const message = req.body.message;
        let failedMessageQueue;
        let failureTriggerCount = 0;
        let failureTriggerCountThreshold = 3;
        let newMsgNode = {
            message: message,
            priority: 0
        };

        /// try to send the message
        msgUtils.Utils.sendMessage(req.body)
            .then(function () {
                res.send(`Message received from: ${req.body.from} to ${req.body.to} with message ${req.body.message}`);
            }, function () {

                console.log('send failed');

                //get unique queue
                failedMessageQueue = msgUtils.getUniqueFailureQueue(req.body.from, req.body.to);

                //get front message in queue
                var frontMsgNode = failedMMessageQueue.front();

                //already has a critical failure
                if (frontMsgNode && frontMsgNode.priority === 1) {
                    //notify support

                    //notify User
                    res.status(500).send('Critiical server error! Failed to send message');
                } else {
                    // add more
                    failedMessageQueue.add(newMsgNode);

                    //increment count
                    failureTriggerCount++;

                    //trigger Failure Protocol
                    triggerFailureProtocol();
                }
            });

        function triggerFailureProtocol() {


            console.log('trigger failure portocol');

            // get the front message from queue
            var frontMsgNode = failedMessageQueue.front();

            //low priotiry and hasn't hit retry threshold
            if (frontMsgNode.priority === 0 && failureTriggerCount <= failureTriggerCountThreshold) {
                // try to send message
                msgUtils.sendMessage(frontMsgNode.message).then(function () {
                    console.log('resend success');

                    //success, so remove from queue
                    failedMessageQueue.remove();

                    // inform user
                    res.send('OK!');
                }, function () {
                    console.log('resend failure');
                    // increment counter
                    failureTriggerCount++;

                    //retry failure protocol
                    triggerFailureProtocol();

                });
            } else {
                console.log('resend fauked too many times');

                //replace rop message with higher priority message

                let prevMsgNode = failedMessageQueue.remove();

                prevMsgNode.priority = 1;

                // gets added to front
                failedMessageQueue.add(prevMsgNode);

                res.status(500).send('critical server error! Failed to send message');
            }



            msgUtils.sendMessage(msg).then(function () {
                failedMessageQueue.remove();
                res.send('OK!');
            }, function (msg) {
                //retyr failure protocol
                triggerFailureProtocol();
            });

        }
        //  console.log(req.body);

    });

module.exports = router;