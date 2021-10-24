

export function isVal(str){
  return str?undefined:"This field is required. Please enter some value!";
}

export function maxLength(maxL){
  return function(str){
    return str.length>maxL?"Max symbol count is exceeded":undefined;
  }
}

export function mainLength(minL){
  return function(str){
    return str.length<minL?`Minimal symbol count is ${minL}. U are missin' ${minL - str.length} symbols`:undefined;
  }
}

export function eMail(str){

}
