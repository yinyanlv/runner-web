import rewire from "rewire"
const jwtService = rewire("./jwtService")
const JwtService = jwtService.__get__("JwtService")
// @ponicode
describe("init", () => {
    let inst: any

    beforeEach(() => {
        inst = new JwtService()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.init()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_setInterceptors", () => {
    let inst: any

    beforeEach(() => {
        inst = new JwtService()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst._setInterceptors()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_handleAuthentication", () => {
    let inst: any

    beforeEach(() => {
        inst = new JwtService()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst._handleAuthentication()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_setSession", () => {
    let inst: any

    beforeEach(() => {
        inst = new JwtService()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst._setSession("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst._setSession("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst._setSession("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst._setSession("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst._setSession("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst._setSession("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_clearSession", () => {
    let inst: any

    beforeEach(() => {
        inst = new JwtService()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst._clearSession()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("loginWithAccessToken", () => {
    let inst: any

    beforeEach(() => {
        inst = new JwtService()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.loginWithAccessToken()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("logout", () => {
    let inst: any

    beforeEach(() => {
        inst = new JwtService()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.logout()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_isAccessTokenValid", () => {
    let inst: any

    beforeEach(() => {
        inst = new JwtService()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst._isAccessTokenValid("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst._isAccessTokenValid("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst._isAccessTokenValid("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst._isAccessTokenValid("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst._isAccessTokenValid("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst._isAccessTokenValid("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_getAccessToken", () => {
    let inst: any

    beforeEach(() => {
        inst = new JwtService()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst._getAccessToken()
        }
    
        expect(callFunction).not.toThrow()
    })
})
