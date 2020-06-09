<template>
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <button type="button" class="btn btn-info col-md-12">{{NameBT}}</button>
        </div>
        <div class="col-md-2"></div>
    </div>
</template>

<script>
export default {
    name :"buttonLogin",
    props :{
        NameBT : String,
    },
}
</script>