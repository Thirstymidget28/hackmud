function(c, a)
{
    let commands = ['unlock', 'open', 'release'],
        digits ='0123456789'.split(''),
        colors = ['red','purple','blue','cyan','green','lime','yellow','orange'],
        i = 0,
        params = {}
    out

    for (;;) {
        out = a.target.call(params)

        // Message:
        // 'LOCK_ERROR'
        // Denied access by HALPERYON SYSTEMS 'EZ_21' lock.
        if (out.includes('`EZ_21`')) {
            lock = 'EZ_21'
            params.ez_21 = commands[0]
        }
        
        // Message:
        // 'LOCK_ERROR'
        // Denied access by HALPERYON SYSTEMS 'EZ_35' lock.
        else if (out.includes('`EZ_35`')) {
            lock = 'EZ_35'
            params.EZ_35 = commands[0]
        }
        
        // Message:
        // 'LOCK_ERROR'
        // Incorrect unlock command.
        else if (out.includes('is not the correct unlock command')) {
            let index = commands.indexOf(params[lock])
            params[lock] = commands[index + 1]
        }

        // Message
        // 'LOCK_ERROR'
        // Incorrect unlock digit.
        else if (out.includes('is not the correct digit')) {
            params.digit = i++
        }
        

        // Unhandled message
        else {
            return out
        }       
    }
/**
    // ez_21
    for (let command of commands) {
        params.EZ_21 = command
        out = a.target.call({ EZ_21: command })
        if (!out.includes('incorrect unlock command')) break
    }
    // ez_35  
    for (let command of commands) {
        params.EZ_35 = command
        out = a.target.call(params)
        if (!out.includes('incorrect unlock command')) break
    }

    for (let digit of digits) {
        params.digit = digit
        out = a.target.call(params)
        if (!out.includes('incorrect digit')) break
    }
    // c001 
    for (let color of colors) {
        params.c001 = color
        out = a.target.call(params)
        if(!out.includes('incorrect color')) break
    }
    for (let color of colors) {
        params.color_digit = color.length
        out = a.target.call(params)
        if(!out.includes('incorrect color digit')) break
    }
**/
}
