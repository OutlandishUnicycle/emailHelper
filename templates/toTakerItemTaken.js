module.exports = (giverEmail, giverName, takerEmail, takerName, itemname) => ({
    to: `${takerEmail}`,
    subject: `Thanks for selecting ${giverName}'s ${itemname}`,
    text: `
    Hello, ${takerName}!

    We've notified ${giverName} that you're interested in their ${itemname}. They should be in contact with you soon, if not please let us know at discollect_support@gmail.com and we'll get a hold of them for you.

    Thanks for working with Discollect!

    Sincerely,
    Discollect
    `,
});
