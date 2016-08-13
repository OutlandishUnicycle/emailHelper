module.exports = (giverName, takerEmail, takerName, itemname) => ({
    to: `${takerEmail}`,
    subject: 'Someone\'s taken your item!',
    text: `
    Hello, ${takerName}!

    ${giverName} has marked ${itemname} as 'collected'. Thanks for taking care of that!

    Please take a moment and rate your giver on this exchange by logging into your Dashboard and rating the item in 'History'.

    If something here seems wrong, please let us know at discollect_support@gmail.com.

    Thanks for working with Discollect!

    Sincerely,
    Discollect
    `,
});
