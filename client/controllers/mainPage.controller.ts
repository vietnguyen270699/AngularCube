module app{
    'use strict'

    @Controller ('MainPageController')
    export class MainPageCtrl{

    private internDto: InternDto;
    constructor(){
        this.internDto = new InternDto();
        this.internDto.internID = '113';
        this.internDto.internName = 'Nguyen Quoc Viet';
        this.internDto.internBirthday ='27/06/1999';
        this.internDto.internInCompanyDay= '15/11/2021'
    } 

    }
}