module.exports = (giverEmail, giverName, takerEmail, takerName, itemname) => ({
    to: `${giverEmail}`,
    subject: 'Someone\'s taken your item!',
    text: `
    Hello, ${giverName}!

    ${takerName} has requested to take your ${itemname}. Please send them a message at: ${takerEmail}.

    Thanks for working with Discollect!

    Sincerely,
    Discollect
    `,
});
